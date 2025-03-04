export interface res {
    page: number
    results: results[]
    total_pages: number
    total_results: number
}

export interface results {
    id: string,
    original_title: string,
    file_url: string;
    type: string;
    detail: string
}