import React from "react";

class Counter extends React.Component{
    state = {
        value:0,
    };
// ---------------------------------------------------------------------
// Функція для зміни значення value, не відштовхуючись від попереднього значенння
// handleIncrement = ()=> {
//     this.setState({value:1233});
// }
// ----------------------------------------------------

// Ф-ція для зміни value, відштовхуючись від попереднього значення:
handleIncrement = ()=> 
   this.setState(prevState => ({
        value:prevState.value + 1,
   }));


handleDecrement = () =>
		this.setState((prevState) => {
			if (prevState.value === 0) return { value: 0 }
			return { value: prevState.value - 1 }
		});

    render() {
		return (
           
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{this.state.value}
						</p>
                      
						<div className='d-flex justify-content-center px-5'>
							<button
								className='btn btn-outline-success me-5'
								onClick={this.handleIncrement}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>

							<button
								className='btn  btn-outline-danger ms-5'
							onClick={this.handleDecrement}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Counter;
