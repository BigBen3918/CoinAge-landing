import React from 'react'

const Card = ({img, title, content}) => {
	return (
		<div className='card'>
			<img style={{marginBottom:'28px'}} src={img }  />
			<h4 style={{marginBottom:'28px', fontSize:'18px'}}>{title}</h4>
			<p style={{}}>{content}</p>
		</div>
	)
}

 
export default Card;