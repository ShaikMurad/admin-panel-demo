import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Product List</h1>
        <Link
          to="CreateProduct"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          Product
        </Link>
      </div>

      <div class="card text-center">
        <div class="card-header">User Details</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">ProductName</th>
                <th scope="col">ProductPrice</th>
                <th scope="col">Available Stocks</th>
                <th scope="col">Product Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Otto</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Otto</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer text-muted">End</div>
      </div>
    </>
  );
}
