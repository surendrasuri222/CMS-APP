import React from "react";

const User = () => {
  
    return (
        <>
           <section>
                <div className="container">
                    <div className="row">
                        
                   
                        
                        <div className="col-md-8">
                        <div class="row">
                                <div class="col-md-6">
                                    <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> Users Details</h1>
                                </div>
                                <div class="col-md-6">
                                    <div class="btn-group actions" role="group" aria-label="...">
                                        <a href="#" type="button" class="btn btn-default"><i class="glyphicon glyphicon-plus"></i> New</a>
                                        <a href="#" type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</a>
                                        <a href="#" type="button" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i> Delete</a>
                                    </div>
                                </div>
                            </div>

                            <ol class="breadcrumb">
                                <li><a href="index.html">Users</a></li>
                                <li class="active">User Details</li>
                            </ol>

                            

                            

                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )
}

export default User;