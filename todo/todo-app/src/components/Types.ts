// Task型の定義．exportでほかのファイルでも使えるようにしている．
export type Task = {
    id: number,
    title: string,
    done: boolean
};