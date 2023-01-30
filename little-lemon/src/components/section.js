
const Section = ({color, children}) =>{
  return (
    <section Style={'background-color:'+ color}>
        {children}
    </section>

   );
}

export default Section;