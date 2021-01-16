import React from 'react'




function FilterComponent(props) {
    


    return (
        <React.Fragment>
            <form className="d-flex justify-content-end ">
                <div className="input-group-text bg-dark w-100 border-0" >
                    <input type="search" className="form-control mx-3 rounded-pill"  onChange={(e)=>props.seachValue(e)}/>
                </div>
            </form>
        </React.Fragment >
    )
}

export default FilterComponent;

