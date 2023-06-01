import React from 'react'

function Header({ onChangeMenu }) {
    return (
        <>
            <nav className=' header-div d-flex justify-content-between align-items-center'>

                <div className='d-flex '>
                    <i onClick={onChangeMenu} className="bi bi-list fs-4 px-3"></i>
                    <h3 className='text-danger '>
                        <i className="bi bi-youtube pe-0 pe-md-2 pe-lg-3"></i>
                        <span className='text-white d-none d-md-inline'>Youtube</span> </h3>
                </div>

                <div className='search-div'>
                    <input type="text" />
                    <button>
                        <i className="bi bi-search "></i>
                    </button>
                    <button className='d-none d-md-inline'>
                        <i className="bi bi-mic-fill "></i>
                    </button>
                </div>

                <ul className='d-flex pe-lg-4 align-items-center list-unstyled'>
                    <li>
                        <i className="bi bi-bag-plus fs-4 d-none d-lg-block">
                        </i>
                    </li>
                    <li>
                        <i className="bi bi-bell fs-4 px-0 px-lg-4 d-none d-lg-block"></i>
                    </li>
                    <li className='profile p-3'>
                        <div class="dropdown">
                            <p class=" dropdown-toggle mt-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                M
                            </p>
                            <ul class="dropdown-menu bg-black p-4" aria-labelledby="dropdownMenuButton1">
                                <li className='d-flex'>
                                    <p className='text-white bg-success text-center rounded-circle d-flex align-items-center justify-content-center mt-3' style={{ width: "40px", height: "40px" }}> <big>İ</big> </p>
                                    <a class="dropdown-item text-white" href="/">
                                        Kullanıcı
                                        <br />
                                        asd@gmail.colum
                                        <br />
                                        <small className='text-info'>Google Hesabınzı yönetin</small>
                                    </a></li>
                                <li className="dropdown-divider border"><hr /></li>

                                <li><a class="dropdown-item text-white" href="/">Action</a></li>
                                <li><a class="dropdown-item  text-white" href="/">Another action</a></li>
                                <li><a class="dropdown-item  text-white" href="/">Something else here</a></li>
                                <li className="dropdown-divider border"><hr /></li>
                                    
                                <li><a class="dropdown-item  text-white" href="/">Another action</a></li>
                                <li><a class="dropdown-item  text-white" href="/">Something else here</a></li>
                                <li className="dropdown-divider border"><hr /></li>

                                <li><a class="dropdown-item  text-white" href="/">Another action</a></li>
                                <li><a class="dropdown-item  text-white" href="/">Something else here</a></li>
                                <li className="dropdown-divider border"><hr /></li>
                                <li><a class="dropdown-item  text-white" href="/">Another action</a></li>
                                <li><a class="dropdown-item  text-white" href="/">Something else here</a></li>
                                <li className="dropdown-divider border"><hr /></li>
                                <li><a class="dropdown-item text-white" href="/">Another action</a></li>
                                <li><a class="dropdown-item text-white" href="/">Something else here</a></li>
                                <li className="dropdown-divider border"><hr /></li>
                            </ul>
                        </div>
                    </li>
                </ul>


            </nav>
        </>
    )
}

export default Header