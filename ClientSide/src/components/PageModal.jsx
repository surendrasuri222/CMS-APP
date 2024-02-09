import React from "react";

export default function BookModal() {

    return (
        <>
            <button type="button" class="btn btn-primary shadow-lg" data-toggle="modal" data-target=".bd-example-modal-lg"><i className="glyphicon glyphicon-plus"></i> New</button>

            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title d-flex justify-content-center" id="exampleModalLabel">Add New Book</h3>

                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="title" class="col-form-label">Title:</label>
                                    <input type="text" class="form-control" id="title" />
                                </div>
                                <div class="form-group">
                                    <label for="description" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="description" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image" class="col-form-label">Image:</label>
                                    <input type="file" class="form-control-file" id="image" accept="image/*" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
