import Button from 'react-bootstrap/Button';

function ButtonExample() {
  return (
    <>
      <div className="mb-2" style={{margin:"0.5in"}}>
        <Button href="#contact" variant="primary" size="lg">
            Get in Touch 
        </Button>
      </div>
    </>
  );
}

export default ButtonExample;