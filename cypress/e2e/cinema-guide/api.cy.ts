import {apiKey, baseUrl} from "../../constants.js";

describe('Movies API Tests', () => {

    it('Fetches popular movies', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
            headers: {
                accept: 'application/json',
                Authorization: apiKey
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.results).to.be.an('array');
            expect(response.body.results.length).to.be.greaterThan(0);
        });
    });

    it('Fetches upcoming movies', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/movie/upcoming?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: apiKey
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.results).to.be.an('array');
            expect(response.body.results.length).to.be.greaterThan(0);
        });
    });

    it('Fetches top movies', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/movie/top_rated?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: apiKey
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.results).to.be.an('array');
            expect(response.body.results.length).to.be.greaterThan(0);
        });
    });

    it('Fetches now playing movies', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/movie/now_playing?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: apiKey
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.results).to.be.an('array');
            expect(response.body.results.length).to.be.greaterThan(0);
        });
    });
});
