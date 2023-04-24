import React from "react";
import { Link } from "react-router-dom";

export default function Userlist() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="Create"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          User
        </Link>
      </div>
      <div class="card text-center">
        <div class="card-header">User Details</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Murad Cherry</td>
                <td>970XXXXX50</td>
                <td>shaikmurad786@gmail.com</td>
                <td>Chittoor</td>
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
                <td>Gulam</td>
                <td>9704XXXX34</td>
                <td>gulam@gmail.com</td>
                <td>Chittoor</td>
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
                <td>Choti</td>
                <td>970XXXX223</td>
                <td>choti@gmail.com</td>
                <td>Chittoor</td>
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
