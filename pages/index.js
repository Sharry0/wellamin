
import dynamic from "next/dynamic";
const DynamicCanvas = dynamic(() => import('../components/DynamicCanvas'), {
  // loading: () => 'Loading...',
  ssr: false,
})

export default function Home() {
  return (
    <>
      <DynamicCanvas />
    </>
  )
}
