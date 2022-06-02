const Error =  () => { 
    return <>
        <div style={{overflow:'hidden'}}>	
            <div className="row  center middle m0 p0 mt5 pt5">
                <div>
                    <h1 style={{ fontSize: '10em' }} className="text-primary linear-text">404</h1>
                </div>
            </div>
            <div className="row center">
                <div className='text-light h3' style={{ textDecoration: 'underline', cursor:'pointer' }} onClick={() => { window.history.back() }}>Back</div>
            </div>
        </div>
    </>
}

export default Error
