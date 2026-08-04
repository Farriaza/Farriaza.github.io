document.getElementById('year').textContent = new Date().getFullYear();
  function handleSubmit(e){
    e.preventDefault();
    document.getElementById('formStatus').textContent = 'Gracias, recibimos tu mensaje. Te contactaremos pronto.';
    e.target.reset();
    return false;
  }