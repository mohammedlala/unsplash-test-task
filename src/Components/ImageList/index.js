import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

const ImageList = ({ value }) => {
	const { imageData, loading, totalImages } = useSelector(
		(state) => state.splashReducer,
	);

	return (
		<Container>
			<Row>
				<Col className='text-left'>
					<h4>{value}</h4>
					<p className='small'>{totalImages} Images has been found</p>
				</Col>
			</Row>
			<Row>
				{imageData?.map((item) => (
					<Col md={3}>
						<img
							src={item.urls.regular}
							alt={item.alt_description || ''}
							style={{ height: '150px', width: '100%' }}
							className='img-fluid mb-4 rounded'
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ImageList;
