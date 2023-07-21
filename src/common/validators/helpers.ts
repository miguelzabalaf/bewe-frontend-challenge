import * as Yup from 'yup';

export function mergeValidators(...schemas: Yup.AnySchema[]) {
    const [firstSchema, ...rest] = schemas;
    const allSchemasMerged = rest.reduce(
        (mergedSchemas, schema) => mergedSchemas.concat(schema),
        firstSchema,
    );
    return allSchemasMerged;
}
