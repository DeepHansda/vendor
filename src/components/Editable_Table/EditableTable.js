import React, { Component } from 'react'


function EditableTable(){
    return (
        <div class="row" style={{paddingLeft:'90px'}}>
                            <div class="col-12">
                                <div class="card card-statistics clients-contant">
                                    <div class="card-header">
                                        <div class="d-xxs-flex justify-content-between align-items-center">
                                            <div class="card-heading">
                                                <h1 class="card-title" >My Orders</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body py-0 table-responsive">
                                        <table class="table clients-contant-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Clients</th>
                                                    <th scope="col">Transaction date</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Edit &amp; Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/01.jpg" class="img-fluid" alt="Clients-01"/>
                                                            </div>
                                                            <p class="font-weight-bold">Adrian Demiandro</p>
                                                        </div>
                                                    </td>
                                                    <td>20/07/2018</td>
                                                    <td>$230.00</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>Paid</span></td>
                                                    <td>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0 "><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/02.jpg" class="img-fluid" alt="Clients-02"/>
                                                            </div>
                                                            <p class="font-weight-bold">Jenny Smithdro</p>
                                                        </div>
                                                    </td>
                                                    <td>25/08/2018</td>
                                                    <td>$330.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-primary"></a><span>Unpaid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/03.jpg" class="img-fluid" alt="Clients-03"/>
                                                            </div>
                                                            <p class="font-weight-bold">Brian Joedro</p>
                                                        </div>
                                                    </td>
                                                    <td>01/09/2018</td>
                                                    <td>$500.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-primary"></a><span>Unpaid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/04.jpg" class="img-fluid" alt="Clients-04"/>
                                                            </div>
                                                            <p class="font-weight-bold">Sandradro Garett</p>
                                                        </div>
                                                    </td>
                                                    <td>03/08/2018</td>
                                                    <td>$130.00</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>Paid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/05.jpg" class="img-fluid" alt="Clients-05"/>
                                                            </div>
                                                            <p class="font-weight-bold">Garydro</p>
                                                        </div>
                                                    </td>
                                                    <td>15/08/2018</td>
                                                    <td>$35.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-danger"></a><span>Canceled</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round disabled mr-2"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round disabled"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/06.jpg" class="img-fluid" alt="Clients-06"/>
                                                            </div>
                                                            <p class="font-weight-bold">Andrew dro</p>
                                                        </div>
                                                    </td>
                                                    <td>20/07/2018</td>
                                                    <td>$230.00</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>Paid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/07.jpg" class="img-fluid" alt="Clients-07"/>
                                                            </div>
                                                            <p class="font-weight-bold">Stonedro</p>
                                                        </div>
                                                    </td>
                                                    <td>25/08/2018</td>
                                                    <td>$330.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-primary"></a><span>Unpaid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/08.jpg" class="img-fluid" alt="Clients-08"/>
                                                            </div>
                                                            <p class="font-weight-bold">Jimmy dron</p>
                                                        </div>
                                                    </td>
                                                    <td>01/09/2018</td>
                                                    <td>$500.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-primary"></a><span>Unpaid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/09.jpg" class="img-fluid" alt="Clients-09"/>
                                                            </div>
                                                            <p class="font-weight-bold">Richard dro</p>
                                                        </div>/
                                                    </td>
                                                    <td>03/08/2018</td>
                                                    <td>$130.00</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>Paid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/01.jpg" class="img-fluid" alt="Clients-01"/>
                                                            </div>
                                                            <p class="font-weight-bold">Garettnice</p>
                                                        </div>
                                                    </td>
                                                    <td>15/08/2018</td>
                                                    <td>$35.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-danger"></a><span>Canceled</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round disabled mr-2"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round disabled"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/02.jpg" class="img-fluid" alt="Clients-02"/>
                                                            </div>
                                                            <p class="font-weight-bold">Adriannyt</p>
                                                        </div>
                                                    </td>
                                                    <td>20/07/2018</td>
                                                    <td>$230.00</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>Paid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/03.jpg" class="img-fluid" alt="Clients-03"/>
                                                            </div>
                                                            <p class="font-weight-bold">Michaelbrt</p>
                                                        </div>
                                                    </td>
                                                    <td>25/08/2018</td>
                                                    <td>$330.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-primary"></a><span>Unpaid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/04.jpg" class="img-fluid" alt="Clients-04"/>
                                                            </div>
                                                            <p class="font-weight-bold">Andrewwer</p>
                                                        </div>
                                                    </td>
                                                    <td>01/09/2018</td>
                                                    <td>$500.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-primary"></a><span>Unpaid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/05.jpg" class="img-fluid" alt="Clients-05"/>
                                                            </div>
                                                            <p class="font-weight-bold">Braincdt</p>
                                                        </div>
                                                    </td>
                                                    <td>03/08/2018</td>
                                                    <td>$130.00</td>
                                                    <td><a href="javascript:void(0)" class="dot"></a><span>Paid</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-img mr-4">
                                                                <img src="assets/img/avtar/06.jpg" class="img-fluid" alt="Clients-06"/>
                                                            </div>
                                                            <p class="font-weight-bold">Sandrapot</p>
                                                        </div>
                                                    </td>
                                                    <td>15/08/2018</td>
                                                    <td>$35.00</td>
                                                    <td><a href="javascript:void(0)" class="dot bg-danger"></a><span>Canceled</span></td>
                                                    <td><a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round disabled mr-2"><i class="ti ti-pencil"></i></a>
                                                        <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round disabled"><i class="ti ti-close"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}
export default EditableTable;