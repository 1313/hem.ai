export interface Groupable {
    group: string | number;
}
export interface Groups<T extends Groupable> {
    [key: number]: T[];
    [key: string]: T[];
}
export function createGroups<T extends Groupable>(groupables: T[]): Groups<T> {
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
