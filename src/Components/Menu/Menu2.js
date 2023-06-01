import React from 'react'

function Menu2({menu}) {
  return (
    <>
      {!menu &&
                <div className="col-2 d-flex justify-content-center mt-4 " style={{ width: "79px" }}>
                    <ul className='p-0 m-0'>
                        <li className='d-flex flex-column align-items-center mb-4'>
                            <i className="bi bi-house fs-6"></i>
                            <span className='small'>Ana sayfa</span>
                        </li>
                        <li className='d-flex  flex-column align-items-center mb-4'>
                            <i className="bi bi-gpu-card fs-6"></i>
                            <span className='small'>Shorts</span>
                        </li>
                        <li className='d-flex flex-column align-items-center  mb-4'>
                            <i className="bi bi-play-btn fs-6"></i>
                            <span className='small'>Abonelikler</span>
                        </li>
                        <li className='d-flex flex-column align-items-center  mb-4'>
                            <i className="bi bi-play-btn fs-6"></i>
                            <span className='small '>Kitaplık</span>
                        </li>
                    </ul>
                </div>
            }
    </>
  )
}

export default Menu2