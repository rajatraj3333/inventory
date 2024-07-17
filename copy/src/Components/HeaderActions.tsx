import React from 'react';
import './css/headeraction.css'

interface HandleSearch {
    handlesearch(e:React.ChangeEvent<HTMLInputElement>):void
	// Setdate(e:string):void
	// Setselect(e:string):void
	Filter(e:string|React.ChangeEvent<HTMLInputElement>,type:string):void
	resetAll():void
	}


function HeaderActions(props:HandleSearch){

	const {Filter, handlesearch, resetAll}=props;

	return(
	<div className="headerActions" >

					<div className="input-search">
						<input type="text" placeholder="Serach Product Name..." onChange={handlesearch} />
						<img  src="/search-find-magnifier-svgrepo-com.svg" alt="search here..."/>
					</div>
					<input type="date" onChange={(e)=>Filter(e.target.value,'date')} value={''}/>
					<select name="" id="" onChange={(e)=>Filter(e.target.value,'price')} >
						<optgroup >
							<option value="500-2500">RS500-2500</option>
							<option value="1000-5000">RS1000-5000</option>
							<option value="5000-15000">RS5000-15000</option>
							<option value="15500-25000">RS15500-25000</option>
							
						</optgroup>
					</select>
					<button onClick={resetAll}>Reset all</button>
				</div>
)
}

export default HeaderActions