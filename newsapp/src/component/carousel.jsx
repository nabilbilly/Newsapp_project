import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Image2 from '../images/Airport.jpg'

function Carousels() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
      <> 
          <section className="">
              <Container>
                  <Row>
                      <Col >
                        <div className="content-carousel">
                          <Carousel responsive={responsive} infinite={true}>
                          <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>     
                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>     

                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>     


                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>     



                              <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div> 

                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>

                             {/***************************************************************** *  */}
                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>     

                             {/***************************************************************** *  */}
                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>   
                             {/***************************************************************** *  */}
                             <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>     

                             {/***************************************************************** *  */}
                            <div class="book">
                              <p>Hello</p>
                                <div class="cover">
                                <div class="card">
                                <div class="image"></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                      dolores, possimus pariatur animi temporibus nesciunt praesentium 
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                </div>
                            </div>                                    
                          </Carousel>
                        </div>   
                      </Col>
                    
                  </Row> 
              </Container>
          </section>   
     </>
  ) 
}
export default Carousels

