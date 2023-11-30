type HotelChainIconProps = {
  temp?: boolean
  size?: number
}

export function HotelChainIcon({
  temp = true,
  size = 22,
}: HotelChainIconProps) {
  return temp ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 62 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 38.8C54.5582 38.8 54.2 38.4418 54.2 38V28C54.2 27.3373 53.6627 26.8 53 26.8H33C32.5582 26.8 32.2 26.4418 32.2 26V18C32.2 17.5582 32.5582 17.2 33 17.2H38C38.6627 17.2 39.2 16.6627 39.2 16V2C39.2 1.33726 38.6627 0.8 38 0.8H24C23.3373 0.8 22.8 1.33726 22.8 2V16C22.8 16.6627 23.3373 17.2 24 17.2H29C29.4418 17.2 29.8 17.5582 29.8 18V26C29.8 26.4418 29.4418 26.8 29 26.8H9C8.33726 26.8 7.8 27.3373 7.8 28V38C7.8 38.4418 7.44183 38.8 7 38.8H2C1.33726 38.8 0.8 39.3373 0.8 40V54C0.8 54.6627 1.33726 55.2 2 55.2H16C16.6627 55.2 17.2 54.6627 17.2 54V40C17.2 39.3373 16.6627 38.8 16 38.8H11C10.5582 38.8 10.2 38.4418 10.2 38V30C10.2 29.5582 10.5582 29.2 11 29.2H29C29.4418 29.2 29.8 29.5582 29.8 30V38C29.8 38.4418 29.4418 38.8 29 38.8H24C23.3373 38.8 22.8 39.3373 22.8 40V54C22.8 54.6627 23.3373 55.2 24 55.2H38C38.6627 55.2 39.2 54.6627 39.2 54V40C39.2 39.3373 38.6627 38.8 38 38.8H33C32.5582 38.8 32.2 38.4418 32.2 38V30C32.2 29.5582 32.5582 29.2 33 29.2H51C51.4418 29.2 51.8 29.5582 51.8 30V38C51.8 38.4418 51.4418 38.8 51 38.8H46C45.3373 38.8 44.8 39.3373 44.8 40V54C44.8 54.6627 45.3373 55.2 46 55.2H60C60.6627 55.2 61.2 54.6627 61.2 54V40C61.2 39.3373 60.6627 38.8 60 38.8H55ZM25.2 4C25.2 3.55817 25.5582 3.2 26 3.2H36C36.4418 3.2 36.8 3.55817 36.8 4V14C36.8 14.4418 36.4418 14.8 36 14.8H26C25.5582 14.8 25.2 14.4418 25.2 14V4ZM14.8 52C14.8 52.4418 14.4418 52.8 14 52.8H4C3.55817 52.8 3.2 52.4418 3.2 52V42C3.2 41.5582 3.55817 41.2 4 41.2H14C14.4418 41.2 14.8 41.5582 14.8 42V52ZM36.8 52C36.8 52.4418 36.4418 52.8 36 52.8H26C25.5582 52.8 25.2 52.4418 25.2 52V42C25.2 41.5582 25.5582 41.2 26 41.2H36C36.4418 41.2 36.8 41.5582 36.8 42V52ZM58.8 52C58.8 52.4418 58.4418 52.8 58 52.8H48C47.5582 52.8 47.2 52.4418 47.2 52V42C47.2 41.5582 47.5582 41.2 48 41.2H58C58.4418 41.2 58.8 41.5582 58.8 42V52Z"
        fill="#00BACC"
        stroke="#00BACC"
        strokeWidth="0.4"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9 15.3C19.4029 15.3 19 14.8971 19 14.4V12.8C19 12.1925 18.5075 11.7 17.9 11.7H13.3C12.8029 11.7 12.4 11.2971 12.4 10.8V9.8C12.4 9.30294 12.8029 8.9 13.3 8.9H13.4C14.0075 8.9 14.5 8.40751 14.5 7.8V5C14.5 4.39249 14.0075 3.9 13.4 3.9H10.6C9.99249 3.9 9.5 4.39249 9.5 5V7.8C9.5 8.40751 9.99249 8.9 10.6 8.9H10.7C11.1971 8.9 11.6 9.30294 11.6 9.8V10.8C11.6 11.2971 11.1971 11.7 10.7 11.7H6.1C5.49249 11.7 5 12.1925 5 12.8V14.4C5 14.8971 4.59706 15.3 4.1 15.3H4C3.39249 15.3 2.9 15.7925 2.9 16.4V19.2C2.9 19.8075 3.39249 20.3 4 20.3H6.8C7.40751 20.3 7.9 19.8075 7.9 19.2V16.4C7.9 15.7925 7.40751 15.3 6.8 15.3H6.7C6.20294 15.3 5.8 14.8971 5.8 14.4V13.4C5.8 12.9029 6.20294 12.5 6.7 12.5H10.7C11.1971 12.5 11.6 12.9029 11.6 13.4V14.4C11.6 14.8971 11.1971 15.3 10.7 15.3H10.6C9.99249 15.3 9.5 15.7925 9.5 16.4V19.2C9.5 19.8075 9.99249 20.3 10.6 20.3H13.4C14.0075 20.3 14.5 19.8075 14.5 19.2V16.4C14.5 15.7925 14.0075 15.3 13.4 15.3H13.3C12.8029 15.3 12.4 14.8971 12.4 14.4V13.4C12.4 12.9029 12.8029 12.5 13.3 12.5H17.3C17.7971 12.5 18.2 12.9029 18.2 13.4V14.4C18.2 14.8971 17.7971 15.3 17.3 15.3H17.2C16.5925 15.3 16.1 15.7925 16.1 16.4V19.2C16.1 19.8075 16.5925 20.3 17.2 20.3H20C20.6075 20.3 21.1 19.8075 21.1 19.2V16.4C21.1 15.7925 20.6075 15.3 20 15.3H19.9ZM10.3 5.6C10.3 5.10294 10.7029 4.7 11.2 4.7H12.8C13.2971 4.7 13.7 5.10294 13.7 5.6V7.2C13.7 7.69706 13.2971 8.1 12.8 8.1H11.2C10.7029 8.1 10.3 7.69706 10.3 7.2V5.6ZM7.1 18.6C7.1 19.0971 6.69706 19.5 6.2 19.5H4.6C4.10294 19.5 3.7 19.0971 3.7 18.6V17C3.7 16.5029 4.10294 16.1 4.6 16.1H6.2C6.69706 16.1 7.1 16.5029 7.1 17V18.6ZM13.7 18.6C13.7 19.0971 13.2971 19.5 12.8 19.5H11.2C10.7029 19.5 10.3 19.0971 10.3 18.6V17C10.3 16.5029 10.7029 16.1 11.2 16.1H12.8C13.2971 16.1 13.7 16.5029 13.7 17V18.6ZM20.3 18.6C20.3 19.0971 19.8971 19.5 19.4 19.5H17.8C17.3029 19.5 16.9 19.0971 16.9 18.6V17C16.9 16.5029 17.3029 16.1 17.8 16.1H19.4C19.8971 16.1 20.3 16.5029 20.3 17V18.6Z"
        fill="white"
        stroke="white"
        strokeWidth="0.2"
      />
    </svg>
  )
}
