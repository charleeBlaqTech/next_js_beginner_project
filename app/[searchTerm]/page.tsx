

type Props = {
    params:{
        searchTerm: string,
    }
}

const page = ({params:{searchTerm}}:Props) => {
  return (
    <div>page</div>
  )
}

export default page