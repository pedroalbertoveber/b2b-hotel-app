import React from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import '@/config/index';

interface AppProviderProps {
    children: React.ReactNode;
  }
  console.log('a');

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <>
    {children}
    </>
  );
}

let ExportedComponent: React.FC<AppProviderProps>;

const isAuthenticated = async (): Promise<boolean> => {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
};

if (import.meta.env.VITE_ENV === 'development' || import.meta.env.VITE_ENV === 'homolog') {
  ExportedComponent = withAuthenticator(AppProvider);
} else {
  const AuthenticatedOrRedirect: React.FC<AppProviderProps> = (props) => {
    React.useEffect(() => {
      const checkAuth = async (): Promise<void> => {
        const isAuth = await isAuthenticated();
        if (!isAuth) {
          window.location.href = import.meta.env.VITE_HUB_ROUTE as string;
        }
      };

      checkAuth();
    }, []);

    return <AppProvider {...props} />;
  };

  ExportedComponent = AuthenticatedOrRedirect;
}

export default ExportedComponent;
