/* eslint-disable react/prop-types */

function Avater (props) {
   let {title = 'hello everyone', des} = props.info;

   console.log(title)

   return <div className='bg-purple-500 text-white font-bold'>
      <h1>{title}</h1>
      <p>{des}</p>
   </div>
}

function Profile () {
   const info = {title: false, des: "It's recommended to destructure your props"}
   return <Avater info={info}/>
}

function App() {
   return (
      <>
         <Profile />
      </>
   );
}

export default App;
