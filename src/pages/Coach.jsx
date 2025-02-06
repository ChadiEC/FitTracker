import React from 'react';

function Coach() {
    return (

        < div >
            < form >
            <h3>Incription en tant que coach</h3><br/>
                <div class="row mb-4">
                    <div class="col">
                        <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="form6Example1">Nom</label>
                            <input type="text" id="form6Example1" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="form6Example2">Prénom</label>
                            <input type="text" id="form6Example2" class="form-control" />
                        </div>
                    </div>
                </div>


                <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example3">Adresse couriel</label>
                    <input type="text" id="form6Example3" class="form-control" />

                </div>


                <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">Adresse </label>
                    <input type="text" id="form6Example4" class="form-control" />
                    
                </div>


                <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">Code postal</label>
                    <input type="email" id="form6Example5" class="form-control" />
                    
                </div>


                <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example6">Phone</label>
                    <input type="number" id="form6Example6" class="form-control" />
                    
                </div>


                <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example7">Information additionnel</label>
                    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                    
                </div>


                <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Envoyer</button>
            </form >
        </div >

    );
}

export default Coach;