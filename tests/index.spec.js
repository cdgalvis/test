import app from "../src/app"
import request from "supertest"

describe('GET /tasks', () => {

    test('sholud respond with a 200 status code',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200);
    })

    test('sholud respond with an array',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array);
    })
});

describe('POST /tasks', () => {

    test('sholud respond with a 200 status code',async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.statusCode).toBe(200);
    })

    test('sholud have a content-type: application/json in header',async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.headers['content-type']).toEqual(
            expect.stringContaining("json")
        );
    })

    test('sholud respond with an task ID',async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.body.id).toBeDefined();
    })

});