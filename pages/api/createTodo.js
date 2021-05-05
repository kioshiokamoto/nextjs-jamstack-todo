import { table, minifyRecords } from './utils/Airtable';

export default async (req, res) => {
    const { description } = req.body;
    try {
        const createdRecords = await table.create([
            { fields: { description} },
        ]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields,
        };
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.json({ msg: 'Algo salio mal :c' });
    }
};