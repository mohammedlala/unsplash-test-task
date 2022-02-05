import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { getImages } from '../../actions/splashActions';
import ImageList from '../../Components/ImageList';
import { SET_PAGE } from '../../actions/actionTypes';
import './home.css';
import { useEffect } from 'react';

const Home = () => {
	const [searchValue, setSearchValue] = useState('');
	const { totalImages, page, loading, imageData } = useSelector(
		(state) => state.splashReducer,
	);
	const dispatch = useDispatch();
	const [value, setValue] = useState('Random');
	useEffect(() => {
		dispatch(getImages('random', 1));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getImages(searchValue, 1));
		setValue(searchValue);
		dispatch({
			type: SET_PAGE,
			payload: 1,
		});
	};
	return (
		<div className='ImageSearch'>
			<Container className='pt-5'>
				<form onSubmit={handleSubmit}>
					<Row className='p-5'>
						<Col md={11}>
							<Form.Control
								type='text'
								placeholder='Search for Photos'
								className='border-0 shadow-sm'
								size='lg'
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
							/>
						</Col>
						<Col md={1}>
							<Button
								variant='dark'
								size='lg'
								type='submit'
								className='shadow-sm'
							>
								Submit
							</Button>
						</Col>
					</Row>
				</form>

				{imageData ? (
					<Row className=' px-4'>
						<Col md={12}>
							<ImageList value={value} />
						</Col>
					</Row>
				) : (
					<Row className='text-center'>
						<Col md={12}>
							<h4>Oops!! No images found :(</h4>
						</Col>
					</Row>
				)}

				{loading && (
					<Row className='pt-2'>
						<Col md={12} className='text-center'>
							<Spinner animation='border' size='lg' />
						</Col>
					</Row>
				)}
				<Row className='py-5'>
					<Col md={12} className='text-center'>
						{totalImages > 9 && (
							<Button
								variant='dark'
								size='lg'
								onClick={() => {
									dispatch(getImages(searchValue || 'random', page + 1));
									dispatch({
										type: SET_PAGE,
										payload: page + 1,
									});
								}}
								disabled={loading}
							>
								Load More
							</Button>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
