import { app } from '../src/api';
const request = require('supertest');

describe('routes', () => {
    describe('get anime route', () => {
        describe('given the anime does not exist', () => {
            it('should return an empty list', async () => {
                const animeName = 'no way an anime has this name';

                await request(app).get(`/anime?title=${animeName}`).expect([]);
            });
            
            it('should return some anime', async () => {
                const animeName = 'one';

                const response = await request(app).get(`/anime?title=${animeName}`);
                expect(!Object.keys(response.body).length).toBe(false);
            });

            it('should return a anime list sorted by latest chapter', async () => {
                const animeName = 'one';

                const response = (await request(app).get(`/anime?title=${animeName}&orderByLatestChapter=true`)).body;
                
                let check = false;

                for ( let i = 1; i < response.length; i++ ) {
                    if ( response[i].latestChapter > response[i - 1].latestChapter ) {
                        check = true;
                        break;
                    }
                }

                expect(check).toBe(false);
            });
        });
    });

    describe('get manga route', () => {
        describe('given the manga does not exist', () => {
            it('should return an empty list', async () => {
                const mangaName = 'no way an manga has this name';

                await request(app).get(`/manga?title=${mangaName}`).expect([]);
            });

            it('should return some manga', async () => {
                const mangaName = 'one';

                const response = await request(app).get(`/manga?title=${mangaName}`);
                expect(!Object.keys(response.body).length).toBe(false);
            });

            it('should return a manga list sorted by latest chapter', async () => {
                const mangaName = 'one';

                const response = (await request(app).get(`/manga?title=${mangaName}&orderByLatestChapter=true`)).body;

                let check = false;

                for ( let i = 1; i < response.length; i++ ) {
                    if ( response[i].latestChapter > response[i - 1].latestChapter ) {
                        check = true;
                        break;
                    }
                }

                expect(check).toBe(false);
            });
        });
    });

    describe('get webtoon route', () => {
        describe('given the webtoon does not exist', () => {
            it('should return an empty list', async () => {
                const webtoonName = 'no way an webtoon has this name';

                await request(app).get(`/webtoon?title=${webtoonName}`).expect([]);
            });

            
            it('should return some webtoon', async () => {
                const webtoonName = 'one';

                const response = await request(app).get(`/webtoon?title=${webtoonName}`);
                expect(!Object.keys(response.body).length).toBe(false);
            });

            it('should return a webtoon list sorted by latest chapter', async () => {
                const webtoonName = 'one';

                const response = (await request(app).get(`/webtoon?title=${webtoonName}&orderByLatestChapter=true`)).body;

                let check = false;

                for ( let i = 1; i < response.length; i++ ) {
                    if ( response[i].latestChapter > response[i - 1].latestChapter ) {
                        check = true;
                        break;
                    }
                }

                expect(check).toBe(false);
            });
        });
    });

    describe('get novel route', () => {
        describe('given the novel does not exist', () => {
            it('should return an empty list', async () => {
                const novelName = 'no way an novel has this name';

                await request(app).get(`/novel?title=${novelName}`).expect([]);
            });


            it.todo('should return some novel');

            it.todo('should return a novel list sorted by latest chapter')
        });
    });
});