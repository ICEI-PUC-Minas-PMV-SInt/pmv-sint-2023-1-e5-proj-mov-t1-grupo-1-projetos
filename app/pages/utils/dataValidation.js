
  const data_validation = /\d{2}\/\d{2}\/\d{4}/;

  export const validate = (text) =>{
  return data_validation.test(text);
}