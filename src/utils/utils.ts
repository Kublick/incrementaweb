import type { z } from 'zod';

export type ErrorResult = Record<string, string>;

export const validateForm = <T extends z.ZodTypeAny>(
	formData: FormData,
	schema: T,
): { formValues: z.infer<typeof schema>; errors: ErrorResult | null } => {
	const formValues = Object.fromEntries(formData);
	try {
		schema.parse(formValues);
		return {
			formValues,
			errors: null,
		};
	} catch (e) {
		const errors = e as z.ZodError;
		return {
			formValues,
			errors: errors.issues.reduce((acc: ErrorResult, curr) => {
				const key = curr.path[0];
				acc[key] = curr.message;
				return acc;
			}, {}),
		};
	}
};
