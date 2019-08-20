export interface Groupable {
    group: string | number;
}
interface Groups<T extends Groupable> {
    [key: number]: Array<T>;
    [key: string]: Array<T>;
}
export function createGroups<T extends Groupable>(
    groupables: Array<T>,
): Groups<T> {
    return groupables.reduce(
        (groups, groupable) => {
            if (groups[groupable.group] === undefined) {
                groups[groupable.group] = [];
            }
            groups[groupable.group].push(groupable);
            return groups;
        },
        {} as Groups<T>,
    );
}
