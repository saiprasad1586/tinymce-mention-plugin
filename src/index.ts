export type ACListItem = {
    [key: string]: string;
}

export type ACSourceFn = (query: string, process: Function, delimiter: string) => ACListItem[] | PromiseLike<ACListItem[]>;

export type AutoCompleteOptions<TDelemeter> = {
    source: ACListItem[] | ACSourceFn;
    delay: number;
    queryBy: string;
    insertFrom?: string;
    items: number;
    delimiter?: TDelemeter;
    matcher?: (item: any) => boolean;
    sorter?: (items: any[]) => any[];
    renderDropdown?: () => string;
    render?: (item: ACListItem, index: number, opts: AutoCompleteOptions<string>) => string;
    insert?: (item: ACListItem, opts: AutoCompleteOptions<string>) => string;
    highlighter?: (text: string) => string;
};
