import React from 'react'

function Menu1({menu}) {
    return (
        <>
            {menu &&
                <div className="col-2 d-none d-lg-block menu-container" style={{ width: "250px" }}>
                    <ul className='px-2'>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-house fs-5"></i>
                            <span className='fs-6 ps-4'>Ana sayfa</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-gpu-card fs-5"></i>
                            <span className='fs-6 ps-4'>Shorts</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Abonelikler</span>
                        </li>
                        <li className="dropdown-divider"><hr /></li>

                        {/*  */}
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Kitaplık</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-clock-history fs-5"></i>
                            <span className='fs-6 ps-4'>Geçmiş</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Videolarınız</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-clock fs-5"></i>
                            <span className='fs-6 ps-4'>Daha sonra izle</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-hand-thumbs-up fs-5"></i>
                            <span className='fs-6 ps-4'>Beğendiğim videolar</span>
                        </li>

                        <div className=" accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed bg-black text-white " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Daha fazlasını göster
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse bg-black text-white" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="">
                                        <li className='d-flex align-items-center mb-2   '>
                                            <i className="bi bi-list-columns fs-5"></i>
                                            <span className='fs-6 ps-4'>Yazılım</span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li className="dropdown-divider"><hr /></li>

                        <h6 className='mb-3 '>Abonelikler</h6>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>lorem</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-clock-history fs-5"></i>
                            <span className='fs-6 ps-4'>lorem</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>lorem</span>
                        </li>
                        <div className=" accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed bg-black text-white " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Daha fazlasını göster
                                    </button>
                                </h2>
                                <div id="flush-collapseOne2" className="accordion-collapse collapse bg-black text-white" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="">
                                        <li className='d-flex align-items-center mb-2   '>
                                            <i className="bi bi-list-columns fs-5"></i>
                                            <span className='fs-6 ps-4'>Yazılım</span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li className="dropdown-divider"><hr /></li>
                        <h6>Keşfet</h6>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Trendler</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-clock-history fs-5"></i>
                            <span className='fs-6 ps-4'>Müzik</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Canlı</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Oyun</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-play-btn fs-5"></i>
                            <span className='fs-6 ps-4'>Spor</span>
                        </li>
                        <li className="dropdown-divider"><hr /></li>
                        <h6>YouTube'dan daha fazla içerik</h6>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-youtube text-danger fs-5"></i>
                            <span className='fs-6 ps-4'>Müzik</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-youtube text-danger fs-5"></i>
                            <span className='fs-6 ps-4'>Canlı</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-youtube text-danger fs-5"></i>
                            <span className='fs-6 ps-4'>Oyun</span>
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <i className="bi bi-youtube text-danger fs-5"></i>
                            <span className='fs-6 ps-4'>Spor</span>
                        </li>
                    </ul>
                    <footer>
                        <ul className='list-unstyled d-flex small flex-wrap gap-2 text-muted'>
                            <li>Hakkında</li>
                            <li>Basın</li>
                            <li>Telif hakkı</li>
                            <li>Bize ulaşın</li>
                            <li>İçerik üreticiler</li>
                            <li>Reklam verme</li>
                            <li>Geliştiriciler</li>
                        </ul>
                        <ul className='list-unstyled d-flex small flex-wrap gap-2 text-muted'>
                            <li>Şartlar</li>
                            <li>Gizlilik</li>
                            <li>Politika ve güvenlik</li>
                            <li>YouTube Nasıl Çalışıyor?</li>
                            <li>Yeni özellikleri deneyin</li>
                            <li>© 2023 Google LLC</li>
                        </ul>
                    </footer>
                </div>
            }
        </>
    )
}

export default Menu1