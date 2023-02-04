
const Section = ({color, children,className}) =>{
  return (
    <section className={className} Style={'background-color:'+ color}>
        {children}
    </section>

   );
}

export default Section;