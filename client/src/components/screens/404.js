import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'

class NotFoundPage extends React.Component{
    render(){
        return (
            <>
            <div class="page_404">
                <div class="container">
                    <div class="row">	
                    <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                    <div class="four_zero_four_bg">
                        <h1 class="text-center ">404</h1>
                    
                    
                    </div>
                    
                    <div class="contant_box_404">
                    <h3 class="h2">
                    Look like you're lost
                    </h3>
                    
                    <p>The pae your're looking for isn't available</p>
                    
                    {/* <a href="" class="link_404">Go to Home</a> */}
                    <Link to="/"><button className="link_404">Go Home</button></Link>
                </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default NotFoundPage;