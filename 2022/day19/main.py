from dataclasses import dataclass
from enum import Enum

ORE = 'ore'
CLAY = 'clay'
OBSIDIAN = 'obsidian'
GEODE = 'geode'

INPUT_EXAMPLE = [
    {ORE: {ORE: 4}, CLAY: {ORE: 2}, OBSIDIAN: {ORE: 3, CLAY: 14}, GEODE: {ORE: 2, OBSIDIAN: 7}},
    {ORE: {ORE: 2}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 8}, GEODE: {ORE: 3, OBSIDIAN: 12}}
]

INPUT = [
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 8}, GEODE: {ORE: 2, OBSIDIAN: 15}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 3, CLAY: 19}, GEODE: {ORE: 4, OBSIDIAN: 15}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 2, CLAY: 8}, GEODE: {ORE: 3, OBSIDIAN: 9}},
    {ORE: {ORE: 3}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 2, CLAY: 12}, GEODE: {ORE: 2, OBSIDIAN: 10}},
    {ORE: {ORE: 3}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 6}, GEODE: {ORE: 3, OBSIDIAN: 16}},
    {ORE: {ORE: 2}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 3, CLAY: 19}, GEODE: {ORE: 4, OBSIDIAN: 8}},
    {ORE: {ORE: 4}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 2, CLAY: 20}, GEODE: {ORE: 3, OBSIDIAN: 9}},
    {ORE: {ORE: 2}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 3, CLAY: 20}, GEODE: {ORE: 2, OBSIDIAN: 16}},
    {ORE: {ORE: 3}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 11}, GEODE: {ORE: 2, OBSIDIAN: 8}},
    {ORE: {ORE: 4}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 11}, GEODE: {ORE: 4, OBSIDIAN: 7}},
    {ORE: {ORE: 3}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 10}, GEODE: {ORE: 2, OBSIDIAN: 13}},
    {ORE: {ORE: 2}, CLAY: {ORE: 2}, OBSIDIAN: {ORE: 2, CLAY: 15}, GEODE: {ORE: 2, OBSIDIAN: 7}},
    {ORE: {ORE: 3}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 18}, GEODE: {ORE: 2, OBSIDIAN: 11}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 3, CLAY: 9}, GEODE: {ORE: 3, OBSIDIAN: 7}},
    {ORE: {ORE: 3}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 3, CLAY: 6}, GEODE: {ORE: 2, OBSIDIAN: 10}},
    {ORE: {ORE: 2}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 14}, GEODE: {ORE: 3, OBSIDIAN: 19}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 20}, GEODE: {ORE: 2, OBSIDIAN: 8}},
    {ORE: {ORE: 4}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 2, CLAY: 10}, GEODE: {ORE: 4, OBSIDIAN: 10}},
    {ORE: {ORE: 4}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 4, CLAY: 18}, GEODE: {ORE: 4, OBSIDIAN: 11}},
    {ORE: {ORE: 2}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 17}, GEODE: {ORE: 3, OBSIDIAN: 10}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 3, CLAY: 10}, GEODE: {ORE: 2, OBSIDIAN: 14}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 20}, GEODE: {ORE: 2, OBSIDIAN: 12}},
    {ORE: {ORE: 4}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 4, CLAY: 19}, GEODE: {ORE: 4, OBSIDIAN: 12}},
    {ORE: {ORE: 2}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 8}, GEODE: {ORE: 3, OBSIDIAN: 20}},
    {ORE: {ORE: 3}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 17}, GEODE: {ORE: 2, OBSIDIAN: 13}},
    {ORE: {ORE: 3}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 8}, GEODE: {ORE: 2, OBSIDIAN: 10}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 4, CLAY: 9}, GEODE: {ORE: 4, OBSIDIAN: 16}},
    {ORE: {ORE: 4}, CLAY: {ORE: 4}, OBSIDIAN: {ORE: 2, CLAY: 9}, GEODE: {ORE: 3, OBSIDIAN: 15}},
    {ORE: {ORE: 3}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 3, CLAY: 16}, GEODE: {ORE: 3, OBSIDIAN: 9}},
    {ORE: {ORE: 4}, CLAY: {ORE: 3}, OBSIDIAN: {ORE: 2, CLAY: 17}, GEODE: {ORE: 3, OBSIDIAN: 16}},
]


def buildable_robots(bp, resources):
    ret = list()
    for robot, cost in bp.items():
        ret.append(robot)
        for resource, amount in cost.items():
            if resource not in resources or resources[resource] < amount:
                ret.pop()
                break
    return ret


def consume_resources(name, bp, resources):
    for resource, amount in bp[name].items():
        resources[resource] -= amount


def bfs(bp,
        resources={ORE: 0, CLAY: 0, OBSIDIAN: 0, GEODE: 0},
        resources_processing={ORE: 0, CLAY: 0, OBSIDIAN: 0, GEODE: 0},
        robots=[ORE],
        robots_available=[ORE],
        robots_processing=[],
        timer=24,
        cache={}):

    key = str(resources) + str(resources_processing) + str(robots) + str(robots_available) + str(robots_processing) + str(timer)

    print(resources, resources_processing, robots, robots_available, robots_processing, timer)
    if key in cache:
        return cache[key]

    if timer <= 0:
        return resources[GEODE]
    else:
        max_geode = 0

        br = buildable_robots(bp, resources)
        can_build_geode = len(list(filter(lambda a: a == GEODE, br))) > 0
        can_build_obs = len(list(filter(lambda a: a == OBSIDIAN, br))) > 0
        if can_build_geode:

            robot = GEODE
            cloned_resources = dict(resources)
            consume_resources(robot, bp, cloned_resources)

            cloned_robots_processing = list(robots_processing)
            cloned_robots_processing.append(robot)

            max_geode = max(max_geode,
                            bfs(bp,
                                resources=cloned_resources,
                                resources_processing=resources_processing,
                                robots=robots,
                                robots_available=robots_available,
                                robots_processing=cloned_robots_processing,
                                timer=timer,
                                cache=cache))

        elif can_build_obs:

            robot = OBSIDIAN
            cloned_resources = dict(resources)
            consume_resources(robot, bp, cloned_resources)

            cloned_robots_processing = list(robots_processing)
            cloned_robots_processing.append(robot)

            max_geode = max(max_geode,
                            bfs(bp,
                                resources=cloned_resources,
                                resources_processing=resources_processing,
                                robots=robots,
                                robots_available=robots_available,
                                robots_processing=cloned_robots_processing,
                                timer=timer,
                                cache=cache))

        else:
            cloned_resources = dict(resources)
            cloned_resources[ORE] += resources_processing[ORE]
            cloned_resources[CLAY] += resources_processing[CLAY]
            cloned_resources[OBSIDIAN] += resources_processing[OBSIDIAN]
            cloned_resources[GEODE] += resources_processing[GEODE]

            cloned_robots = list(robots)
            cloned_robots.extend(robots_processing)
            cloned_robots_available = list(cloned_robots)

            max_geode = max(max_geode,
                            bfs(bp,
                                resources=cloned_resources,
                                resources_processing={ORE: 0, CLAY: 0, OBSIDIAN: 0, GEODE: 0},
                                robots=cloned_robots,
                                robots_available=cloned_robots_available,
                                robots_processing=[],
                                timer=timer - 1,
                                cache=cache))

            for robot in robots_available:
                cloned_resources_processing = dict(resources_processing)
                cloned_resources_processing[robot] += 1

                cloned_robots_available = list(robots_available)
                cloned_robots_available.remove(robot)
                max_geode = max(max_geode,
                                bfs(bp,
                                    resources=resources,
                                    resources_processing=cloned_resources_processing,
                                    robots=robots,
                                    robots_available=cloned_robots_available,
                                    robots_processing=robots_processing,
                                    timer=timer,
                                    cache=cache))

            for robot in br:

                cloned_resources = dict(resources)
                consume_resources(robot, bp, cloned_resources)

                cloned_robots_processing = list(robots_processing)
                cloned_robots_processing.append(robot)

                max_geode = max(max_geode,
                                bfs(bp,
                                    resources=cloned_resources,
                                    resources_processing=resources_processing,
                                    robots=robots,
                                    robots_available=robots_available,
                                    robots_processing=cloned_robots_processing,
                                    timer=timer,
                                    cache=cache))

        cache[key] = max_geode
        print(max_geode)
        return max_geode


print(bfs(INPUT[0]))
