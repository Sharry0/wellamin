
import dynamic from "next/dynamic";
// const DynamicCanvas = dynamic(() => import('../Components/DynamicCanvas'), {
//   // loading: () => 'Loading...',
//   ssr: false,
// })
const DynamicCanvas = dynamic(() => import("../comps/DynamicCanvas"), {
  ssr: false
})

export default function Home() {
  return (
    <div>
      <DynamicCanvas />
    </div>
  )
}
