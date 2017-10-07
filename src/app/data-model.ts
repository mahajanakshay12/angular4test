export class Login {
  email = '';
  password: '';
}
 
export class Registration {
  firstname = '';
  lastname = '';
  email   = '';
  password  = '';
  phone_number = '';
  address = '';
  
}

export class Category {
  name = '';
  code: '';
}

export class Product {
  name = '';
  code: '';
  category: '';
  image: '';
}