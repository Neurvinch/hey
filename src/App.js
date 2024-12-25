import Button from "../src/components/Button";

function App() {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='md:bg-green-300 sm:bg-red-300 bg-blue-300 col-span-10 sm: col-span-5'>
          ki
        </div>
        <div className='bg-yellow-300 col-span-2 text-2xl rounded-full'>
          kii
        </div>    
      </div>
      <Button disabled={false} onClick={() =>{
        console.log('button clicked') 
      }}> Hey Continue</Button>
    </div>
    
  );
}

export default App;