// Hooks
import { useForm } from 'react-hook-form'

// Resolvers
import { zodResolver } from '@hookform/resolvers/zod'

// Form
import { Form, Schema } from '../Schema/schema'

export function SectionForm({ data }) {
  const defaultValues = {
    policyName: data?.policyName || '',
  }
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(Schema),
    defaultValues,
  })

  return {
    register,
    handleSubmit,
    getValues,
    setValue,
    errors,
    isSubmitting,
  }
}
