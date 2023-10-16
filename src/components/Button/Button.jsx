export default function Button ({ text, callback }){
  return <button onClick={callback}>{text}</button>
}