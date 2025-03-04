import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { res } from 'src/dto/nextflix.dto';

@Injectable()
export class NextflixsService {

private apiUrl = 'https://api.themoviedb.org/';
    private apiKey: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTM2ZTc5MGFiZTIxZTdhYWZkMmFhOGZlN2FlMjIwYSIsIm5iZiI6MTc0MDU5MzA3Mi42MzkwMDAyLCJzdWIiOiI2N2JmNTdiMGE3OTZlOTQ2OGVlZmM5NGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ayD2lXxkIuQCvQerOrwE8DreQhkNNVgZBD5KRCYQk6E';

    constructor(private readonly httpService: HttpService) { }

    async getTopRate(page: number, language: string) {
        const headers = {
            Authorization: `Bearer ${this.apiKey}`
        };

        try {
            const response = await firstValueFrom(
                this.httpService.get(
                    `${this.apiUrl}3/movie/popular?language=${language}&page=${page}`,
                    { headers }
                )
            );
            if (!response || !response.data) {
                throw new Error("Invalid API response");
            }
        
            const data: res = {
                page: response.data.page,
                results: response.data.results.map((movie: any) => ({
                    id: movie.id.toString(),
                    file_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    type: movie.media_type || 'movie',
                    detail: movie.overview
                })),
                total_pages: response.data.total_pages,
                total_results: response.data.total_results
            };
        
            return data;
        } catch (error) {
            if (error.response) {
                throw new HttpException(error.response.data, error.response.status);
            }
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getTvShows(page: number, language: string, type: string) {
        const headers = { Authorization: `Bearer ${this.apiKey}` };

        try {
            const response = await firstValueFrom(
                this.httpService.get(`${this.apiUrl}3/tv/${type}?language=${language}&page=${page}`, { headers })
            );

            if (!response || !response.data) {
                throw new Error("Invalid API response");
            }
        
            const data: res = {
                page: response.data.page,
                results: response.data.results.map((movie: any) => ({
                    id: movie.id.toString(),
                    file_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    type: movie.media_type,
                    detail: movie.overview
                })),
                total_pages: response.data.total_pages,
                total_results: response.data.total_results
            };
        
            return data;
        } catch (error) {
            if (error.response) {
                throw new HttpException(error.response.data, error.response.status);
            }
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getMovies(page: number, language: string,type: string) {
        const headers = { Authorization: `Bearer ${this.apiKey}` };

        try {
            const response = await firstValueFrom(
                this.httpService.get(`${this.apiUrl}3/movie/${type}?language=${language}&page=${page}`, { headers })
            );

            if (!response || !response.data) {
                throw new Error("Invalid API response");
            }
        
            const data: res = {
                page: response.data.page,
                results: response.data.results.map((movie: any) => ({
                    id: movie.id.toString(),
                    file_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    type: movie.media_type || 'movie',
                    detail: movie.overview
                })),
                total_pages: response.data.total_pages,
                total_results: response.data.total_results
            };
        
            return data;
        } catch (error) {
            if (error.response) {
                throw new HttpException(error.response.data, error.response.status);
            }
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getNewPopular(page: number, language: string) {
        const headers = {
            Authorization: `Bearer ${this.apiKey}`
        };

        try {
            const response = await firstValueFrom(
                this.httpService.get(
                    `${this.apiUrl}3/movie/popular?language=${language}&page=${page}`,
                    { headers }
                )
            );
            if (!response || !response.data) {
                throw new Error("Invalid API response");
            }
        
            const data: res = {
                page: response.data.page,
                results: response.data.results.map((movie: any) => ({
                    id: movie.id.toString(),
                    file_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    type: movie.media_type || 'movie',
                    detail: movie.overview
                })),
                total_pages: response.data.total_pages,
                total_results: response.data.total_results
            };
        
            return data;
        } catch (error) {
            if (error.response) {
                throw new HttpException(error.response.data, error.response.status);
            }
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getSearchMuti(page: number, language: string, term: string) {
        const headers = { Authorization: `Bearer ${this.apiKey}` };

        const search: string = term !== '' ? `query=${term}&` : '';

        try {
            const response = await firstValueFrom(
                this.httpService.get(`${this.apiUrl}3/search/multi?${search}include_adult=false&language=${language}&page=${page}`, { headers })
            );

            if (!response || !response.data) {
                throw new Error("Invalid API response");
            }
        
            const data: res = {
                page: response.data.page,
                results: response.data.results.filter((obj: any) => obj.media_type !== 'person').map((movie: any) => ({
                    id: movie.id.toString(),
                    file_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    type: movie.media_type || 'movie',
                    detail: movie.overview
                })),
                total_pages: response.data.total_pages,
                total_results: response.data.total_results
            };
        
            return data;
        } catch (error) {
            if (error.response) {
                throw new HttpException(error.response.data, error.response.status);
            }
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
