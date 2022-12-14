import { useState } from 'react';
import { z } from 'zod';
import { ErrorResult, validateForm } from '../utils/utils';

const User = z.object({
	fullname: z
		.string({ required_error: 'El Nombre es requerido' })
		.min(3, { message: 'Al menos 3 caracteres' }),
	email: z
		.string({ required_error: 'El Email es requerido' })
		.email({ message: 'El email no es valido' }),
});

const formNumber = '47';
const formId = '825b67b25840f061ece272c66c4c81d6';

export default function FormularioLeadMagnet() {
	const [errorMessage, setErrorMessage] = useState({} as ErrorResult);
	const [hasError, setHasError] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const handleSubmit = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		setIsSending(true);

		const formData = new FormData(e.target);
		const { errors } = validateForm<typeof User>(formData, User);

		if (errors) {
			setHasError(false);
			setErrorMessage(errors);

			setTimeout(() => {
				setHasError(false);
				setIsSending(false);
			}, 2000);

			return;
		}
		setHasError(false);

		const url = 'https://psicologaberenicebastidas.activehosted.com/proc.php';
		fetch(url, {
			method: 'POST',
			body: formData,
			mode: 'no-cors',
		})
			.then((response) => {
				if (response.status === 200) {
				}
			})
			.catch((error) => {
				console.log(error);
			});
		setTimeout(() => {
			window.location.href = '/lmgracias';
		}, 2000);
	};

	return (
		<div className="container mx-auto max-w-3xl mt-4 md:mt-0">
			<form
				onSubmit={handleSubmit}
				className="mx-4 mt-4 flex flex-col gap-4 lg:mx-24 md:mt-12"
				noValidate
			>
				<input type="hidden" name="u" value={formNumber} />
				<input type="hidden" name="f" value={formNumber} />
				<input type="hidden" name="s" />
				<input type="hidden" name="c" value="0" />
				<input type="hidden" name="m" value="0" />
				<input type="hidden" name="act" value="sub" />
				<input type="hidden" name="v" value="2" />
				<input type="hidden" name="or" value={formId} />

				<input
					type="text"
					name="fullname"
					placeholder="??C??mo te llamas?"
					className="focus w-full appearance-none rounded border border-gray-400 px-3   py-3 focus:border-indigo-600 focus:outline-none active:border-indigo-600 active:outline-none "
				/>

				{hasError && (
					<p className="text-sm text-red-500">{errorMessage.fullname}</p>
				)}

				<input
					type="email"
					name="email"
					placeholder="??Cu??l es tu correo?"
					className="focus w-full appearance-none rounded border border-gray-400 px-3 py-3 focus:border-indigo-600 focus:outline-none active:border-indigo-600 active:outline-none"
				/>
				{hasError && (
					<p className="text-sm text-red-500">{errorMessage.email}</p>
				)}
				<div className="mt-8 flex items-center flex-col">
					<div className="relative group ">
						<div className="animate-pulse absolute  bg-primary rounded-lg blur -inset-0.5 opacity-90 group-hover:opacity-100" />

						<button
							disabled={isSending}
							className={`relative px-7 py-4 rounded-lg leading-none bg-secondary text-white hover:font-semibold ${
								isSending && 'bg-green-600 cursor-not-allowed'
							} `}
							type="submit"
						>
							<span className="text-xl lg:text-2xl">
								{!isSending
									? 'Enviame una copia ahora'
									: 'Registrando tu petici??n!'}
							</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
