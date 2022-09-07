export const getLead = async () => {
	const id = '7YXamvsw6hSppoy-s2glm';
	const aws = 'https://6u4nv7easg.execute-api.us-west-1.amazonaws.com/url/';

	try {
		const response = await fetch(`${aws}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data.body.link;
	} catch (error) {
		console.log(error);
	}
};
