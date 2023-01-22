import React from 'react';
import Table from 'react-bootstrap/Table';

function Cart() {
  return (
    <div>
      <h1 className="text-white justify-content-center text-center mt-2">Cart <i class="fi fi-rs-shopping-cart"></i></h1>
    <Table striped bordered hover variant="dark" className="mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>iPhone</td>
          <td>$</td>
          <td>1</td>
          <td><i class="fi fi-rr-trash ms-5 text-red"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>iPhone</td>
          <td>$</td>
          <td>1</td>
          <td><i class="fi fi-rr-trash ms-5 text-red"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td>iPhone</td>
          <td>$</td>
          <td>1</td>
          <td><i class="fi fi-rr-trash ms-5 text-red"></i></td>
        </tr>
        <tr>
          <td>Coupons</td>
          <td colSpan={4}><input className="w-25 bg-black h-100 text-white" type="text"/></td>
        </tr>
        <tr>
          <td colSpan={5}>Total: </td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
  };

export default Cart;