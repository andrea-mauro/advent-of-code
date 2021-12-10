const input = [
    '{<{<{[<[{{([{{{}()}<{}()>}<[{}]>]<<{{}<>}([]<>)>[({}<>){()[]}]>)[[([(){}][<><>])<<()>{()()}>]]}}[(<{[(<>',
    '[<{{[[(({({<{{<>[]}[[][]]}[{{}()}[[][]]]>}{<[{()<>]<[]()>]{([][]){{}[]}}>})(([<[[]()][()()]><{[]}(<><',
    '{{<{[{[{<{[[[[[]()]]<<{}{}}[{}()]>]]}[<<<<[]()><[][]>><<()<>>({}<>)>>{{{{}{}}[{}<>]}[[<><>]<[',
    '([{((<{((<[(({{}[]}<()()>)[{{}<>}[()()]})<{{()()}[<><>]}>]>))}({<<[({{[]<>}[<>()]}<((){}){[][]}>)[{[{}[',
    '{([<[((<[[<<({[]()}[[]{}]){<{}<>>{()[]}}>[{<{}{}>[(){}]}<({}<>)[[]()]>]>](({{<[]()>(()[])}{<<>()>({',
    '[({[([{<<{<<(<()()>)<[()<>]([]{})>>{<({}[]>{[][]}>([()[]]{(){}})}>{{[{()()}{{}<>}]({<>{}}<{}{}>)}[',
    '<[({(<([{<<<(([]()){()()})[<{}><<>>]><({{}<>](<><>))([{}[]]{(){}})>>(((<[]<>>({}[]))([<>()](<>',
    '<{[[{<<[{(([<([][])<{}<>>>{{<>[]}{()}}]{(<()<>>(()<>)){<{}[]>[[]()]}})<(<({}()){[]{}}>(<[]()>[[]{}])){<(<>',
    '[<[[({<<[[<{{(<>())}<<{}[]>{{}<>}>}[(((){})<()[])){<{}()>[<>()]}]>{[([{}[]](<>{}))<{<>()}{[]()}>](({(){}}<{',
    '(<([<[<{{<[{[(<>())<()()>](<<>[]>{()()})}<<{[]{}}>[(<><>){<>[]}]>]<(<<[]<>><<>{}>>(([])[<>{}]))>>>({<<',
    '(([{(({<{<{(({{}[]}{<>[]}){<()()><<>{}>})[[({}[]){(){}>]]}[[{{<>[]}{()<>}}[{{}}{[][]}]]<<<()()>([][]',
    '[<([{{<[[{<([<{}{}>{(){}}]{[[]{}]{<>[]}})([(<>{})[()[]]])><([{<><>}([]{})]({()()}(<>[])))[[[(){}]{<><>}]<<[',
    '<((<<<[<<([({{()[]}})[{{<>[]}([]{})}{{[]<>)({}<>)}]][[<{<>}(()())>[[<>()]<{}{}>]][<({}()){<>}>{{()()}{<><>}',
    '[{{[{[({([[<({()}((){}))>{([[]<>]<[][]>)}]{({([]<>)<()()>}(<()<>><<>()>)){{<<>{}>{()[]}}[(()())<[',
    '(([[<[[{[{[([[{}()]<[]()>){<()<>>{{}<>}})<{[{}[]]{()<>}}{(()){<>[]}}>]({[{()[]}[<>]]}<(<{}',
    '[{[[[<(<<([[<{()<>}<(){}>>({{}()}<<>{}>)](<{{}()}><<{}[]}<<>[]>>)]<<({[][]}[()[]])[<{}{}>(<>[])]>>){<{{{()()}',
    '(<[<<{[{[[<{<<()()>{<>()}>}>]{[<([<>[]][()[]])<[<>[]]{{}()}>>((<()()>({}<>))<{(){}}{<>{}}>)][<{(<>{}>}{',
    '((<[{<<<<([{{(<>())<(){}>}(<{}<>>[<>{}])}({[<>()]{[]<>}})])[{((<{}<>><()<>>)(<[][]>[()]))<({<>[]}',
    '([((((([[{(<<<<>()>(<>[])>>[[(<>[])<<>{}>}<[[]{}](()[])>])([[({}<>)<[]()>]<[{}{}]{<>[]}>](<(<>())>{<',
    '<<({[{[{((<<({()<>}<[]{}>)({<>[]})><{([]{})}((()[]))>>(({([]<>){{}{}}})<[{{}[]}[(){}]](<()[]><<>{}>)>)',
    '{<[(({<[[([((<()<>><<><>>)(({}())<{}()>))<<<()()>{[]}>[{[][]}[{}[]]]>]{({{<>{}}<(){}>}[<()[]>{<>[]}>)(<[<>',
    '{{({<[((([([<<[]{}>[()()]>(<[]{}>)]{[{[]()}]<<(){}>[()<>]>})[{{[{}<>]}[[<>{}]{<><>}]}]]((<{{{}[]}}>[[<[]<>',
    '<[(<(<[((<{{[<(){}>[[][]]]}}>))]>)([({<(<<{([][])[()[]]}(<{}[]><()<>>)>{[<(){}>([][])]}>{[<<{',
    '(<{{<{<<[((<(<{}{}><[]<>>)<<{}{}><(){}>>>([{<><>}[()()]][{<>[]}([]<>)])))<<{{<<><>>}(<[]{}>(',
    '[(((({{[[{{([(<>{})<[][]>])([[()()][{}]](<{}<>>{<><>}))}}<[<{[()]<[]()>}{(<>[]){<>()}}>[[(<>[])[(){}]](({}())',
    '({{{<{[<{[{<{{{}{}}}[[(){}]{()[]}]>[[<[]<>>{<><>}]([(){}])]}[({{()[]}[{}[]]})[[{<>[]}<{}[]>]]]]}>](({{[[',
    '<{<[{{[{<[[({<[]<>>}{{()()}(<>[])})]]>}[{([[[<<>[]><[]{}>][{<><>}]][((()())(()()))([{}()])]',
    '<<<[([({{<<{[({}<>)[()[]]]({()[]}({}[]))}{[{<>[]][[]]]}>>}}[[({[({()[]}<()>)]<[[()<>]{()<>}][',
    '{[<({{{{<{{{[<()<>>[{}<>]]<[()()]<[][]>>}({<[][]>[()()]}<<[][]><[]()>>)}{([(()<>)<()()>])}>(([<[<',
    '[{<{[<<{{[{[([()<>](()[]))]((<{}{}>)(<[]<>>[<><>]))}]}}>><<<({{{[((){})(<><>)]((()<>){[][]})}(<',
    '[({(<{<{[<{([{[]()}[()()]])><[<{[]<>}{{}()}><(()())(()<>)>](<[[]{}]>[([]{})<()()>])>>][{([<([]())[[]<>]>',
    '{{(<(<{{({((({{}[]}<<>{}>){<{}()>[[][]]})<{{[]()}{()()}}(<{}[]>{()()})>)})}[<<[[{{<>[]}{<>{}}}{{[',
    '<<[<{{[<<{({{(<><>)({}())}({{}<>}[<>])}{[(()<>)<(){}>]{<<><>><[][]>}})<({<[]{}>[[][]]}<<<>{}>{()}>)>}>[<',
    '<{(<[<(((<({[[{}[]>(<>[])]<{[]<>}>}({(()())<{}{}>}<<<>[]>[<>()]>)){<<<[]{}>{()[]}>([[]{}]([]{}))><<{<>[]}',
    '<{{{[(({<{<[<<[]()>({}())>](<((){})[(){}]>(<<>>([]()))))}>([[<[<{}[]><[]()>]{({}[])({}())}>[[({',
    '{([{(<{([<{([{[]()}(<>[])]<<{}<>>(<>{})})[{<<>[]>}(<<><>>[<><>])]}[[{([][])({}())}](<(<>{})(<>)>(([]()){{}',
    '([<<{[[<((([<{()[]}>]<{[[][]]({}<>)}])<([{()[]}<()()>]{<<><>>[()()]})>))<[<<<([]<>)[()[]]>',
    '[[{([{([{[<(<({})[()[]]>[{[]()}[()()]]}[<{{}()}({}[])>(<[]<>>[()[]])]>([((()[])[(){}])]<[{',
    '{{[([[(<(([[[{[]{}}[()()]][[[]{}][<>[]]]][{<<>[]>}]][(<<(){}>{{}<>}>)[<[[]{}]{()()}>[((){})',
    '[({[[([[(<[{<([]{})(<><>)>}][<[[()()]<(){}>][[(){}][{}]]>([({}<>)[[]<>]]{[()[]]<[]()>})]>[[<(([]())<',
    '[<(<[<<{[<{<<[{}()]<<><>>>{[()<>]<[]<>>}><[([]<>)[{}])<{[]()}[<><>]>>}[[<<<>{}><()[]>>(({}[]',
    '(({[{{{[<[{[[<()[]>({}{})][(()[])[(){}]]]({{[]()}}[(<>())<<>[]>])}]<([<<<>[]>[()[]]>{[()<>]<<><>>}]([(<',
    '({<(({([[<(<({<>()}[()<>])({<><>}<[][]>)>([[<>()]([]())]))>]{{[{{{{}[]}}<[<><>]<<>[]>>}}}[{',
    '[(<([({<<(<{<{{}()}{[]()}>(<()()>{{}{}})}{{([]{})<[]>}<(<><>)>}>[<{<[]>([]<>)}({<><>}{[]{}}',
    '<{<[[((([{<[({{}[]}[<>()])(<{}[]>(<>{}))][{{()[]}([][])}({[]})]>({<[()[]]<{}{}>>{<[]{}>{()[]}}}([[{}][{}',
    '[([[<(<[((<[({{}{}}[{}[]]){[[]()](<>())}]>){[({[()()]([]<>)}<<<>{}>(<>()>>)]{{((<>())[{}()])[[()<>]<[]',
    '{{[<{([<[(<([(<>())<<>{}>])[{[()[]][<>{}]}([[]()]<{}<>>)]>)]<[{[{(())(<>{})}[({}{}){[]()}]]}<<{([]{})}[<',
    '([{{<<<([<((({{}{}}((){})){[<><>][[]<>]})<[{[][]}[()()]]([[]<>]{[]()})>)[[<([][]){<><>}>][<',
    '((<(<[([<<<({[<>[]][{}<>]}<{[]()}{{}{}}>)[({{}{}}([]()))(<()><<>>)}>(([<(){}>((){})]){<<<>[]>[{}{}]>({(){}}<',
    '(<<{{[[[<({({[{}{}]((){})}({<><>}({}<>)))}[(<[{}[]][()<>]>{({}{})(()())})<<[[]{}](<>)>([(){}][<><>])>])[',
    '<({{<<(({<[((<{}()>{<>{}}){{{}<>}{<>{}}}){({[]()}<{}[]>)<{()[]}[{}()]>}]{{[{()<>}(<><>)][<<>',
    '<[{[[(<<{{(({{{}<>}{<>()}}(<[]{}>))]([[[<>{}](<>)]{(()())<(){}>}][(({}()){<>()})[(()())[{}{}]]])}<<{{<()()',
    '[{{([<<{[{<([(())]<<{}>[[]<>]>){([()()]){(<>[]]([][])}}>{<[([]{})]{{{}}((){})}><{[<>[]][<>[]]}{{<><>}<',
    '{{{{<((<<{({<(<>[])[<>{}]>{([]<>){[][]}}}[[{[]()}{{}[]}]{[[]{}]<<>()>}])}(<([<{}{})][[{}()]<()()>])(<([][])(',
    '<{{[{[[[[{((((()())(()()))<<()>{()<>}>){[{[]{}]][(<><>)[{}{}]]}){{([<>[]]({}<>))((<>()){[]<>})}({<<>{}><',
    '({({[<<<[{[{([{}()}{<>[]})[(()[]){{}{}}]}]{<([()<>]((){})){(<>{})}>[<{<>()}([])><{[]{}}<[]()>>]}}]{([(<[()',
    '<{({(<{<((<([[{}[]][<>()]])[{(<>)(()[])}([<>()]<[]()>)]>)<<{[<{}<>>[[]()]]}[<((){})<<>()>>',
    '((({(((<<[{<<([]<>)[{}()]>((<><>)({}()))>([[<>[]](<>{})][<{}{}>{[][]}])}]>>)))}){[<{{{(<<[[<{}()>',
    '[<{<<{[<<<[{[{{}[]}[{}[]]]((<>[]){(){}})}{<<{}<>>{<>()}>(([]{}))>][{[<<>[]>]({{}{}}<[]<>>)}]>>',
    '({{[(<{[{[{{(<()[]>(()()))<<{}()><[]()>>}[(<[]>[{}()])[<{}{}>(()[])]]}]}({{<<{[]<>}((){})><<[]',
    '{(<[(<<<[({([((){})]({()<>}{[]<>}))({{<>{}}([][])})}{(({<>{}}<{}<>>)(({}{}){()[]}))[{([]())(',
    '<{([[[(<{[{{{[()<>]}{[<><>][[]<>]}}((([]){{}[]})<<{}>(()<>)>)}<((<(){}>{{}{}})){{(()[]}[()<>]}{[[]()][<>()]',
    '<[{{<([{{({(<{<>[]}{<>{}}>)[{{[][]}<<>{}>}[[(){}]<()<>>]]}<(({[]{}}({}{})){{{}{}}<<>()>})(',
    '{[{{{([({{<<([{}[]][[][])){<[][]>(<>())}><<(<>())<{}{}>>(<[][]>{<><>})>>(<([(){}]<<>{}>)[<[]',
    '(<(<({[[[<<{<[{}<>]([]())>{([]())[()<>]}}<{{<><>}[{}<>]}{[<><>]<[][]>}>>[({[(){}][{}()]}<<[]>([]<>)>)]>[<',
    '{{[({[<[<<<<<{[]{}}<<>[]>>({[]<>}{[]()})><<[[]<>]>[<()<>>{<><>}]]>[[{<()<>><[]<>>}<([]{})(<>{})>]({([',
    '{<[([([[<<<{{<()[]>[<>[]]}[[<>[]]([][])]}([[<><>]<()<>>])>({{[[]{}]{{}<>}}<[<><>][<>()]>}<[[{}[]',
    '<<<<[[<[<[[{{[[]{}]{{}<>}}(<<>()>([]{}))}{[{()[]}{{}{}}][{<><>}(())]}]<((<{}[]>[<>{}])({[]{}}(<>{})))[<',
    '<{[{({{{((<<[<<>[]>[{}()]]>{[([]())((){})]([[]()])}>[[({[]<>]{()()}){{()[]}{{}[]}}]<{{<>{}}([]',
    '{{(<<{[[[[(<([{}[]]([]{}))>[{({}<>)<<><>>}({[][]}({}{}))])]]](<{<[({[]{}}([]<>))({{}[]}<()[]>)]{{',
    '<{[<{[<<<<[<[<{}()><<>>](<()>({}()))>{[<<>[]>{<><>}](({}()))}]{{((()<>)((){})){({}[])<<><>>}',
    '({<{[({([{({<<<><>>([]<>)>(<[]()>[{}()])}<[(()())<()()>][{{}{}}]>)}])(({{(<{(){}}<{}()>>[<<>()><{}<>',
    '{{(({[([<((<{<{}[]>{<>()}}[[<>{}][()<>]]>))[[<{[[][]][[][]]}[<[]>(()[])]>{<[{}[]]{<>{}}><<{}()>[{',
    '<([{{[[<{{[[{{<>}{{}[]}}(([]())[<><>])][[<[]{}>([]{})]{({}){<><>}}]]<<[<[]()><{}{}>][{()}[<>[]]]>{<<<>{}>(<>',
    '{[[[([[(<<[{<<<>()><()[]>>}][<[<[]{}>(<><>))[<[]<>>[<>[]]]><<{[]()}{{}<>}><{<>}<<>{}>>>]><{<([()',
    '<((<[<[([(({{{{}<>}{()[]}}{[<><>](()())}})>{<(((())({}[]))[{{}<>}{<><>}]){<[{}{}]{<>{}}>({()',
    '[{[<<({({{<[[[[]<>]<<>()]]]([[<>[]]<<>{}>]<{[]<>}>)>}}{[[<[{[]{}}<{}[]>](((){}){<><>})>{<[[][]](<>())>',
    '<[[{{[(<{<(([[(){}]{<>())]))[<[<{}[]>{{}[]}][{()<>}[[]<>]]>{{<<>{}><[]<>>}[([]<>)[[]]]}]>}<<<<{[()<',
    '<(<<{{(<<({<{<[]()>}({[]()}[()<>])>(([()()][{}<>])<<(){}>{[][]}>)}(<{{[]{}}{<>()}}[{()<>}(()<>)]>))((({[{}][[',
    '{<<<{({{<([[<{<>{}}[()()]><[<>[]]>][<<<><>>>[(<><>)<<>()>]]]([({(){}}[<>()])]<<<<>[]>>({{}[]}[()[]])>',
    '[{<[{[[[({(<<[()[]]>{{()<>}{<>()}}>)[({[[][]][{}<>]}<<[]{}>[()<>]>){[<<>{}>{{}[]}](([]{}){[][]})}]}{{[(',
    '{(<<<{{<[({([({}[])[{}()]]{(<>{})<{}{}>})(<(<>())>({()<>}<[]{}>))}<{<([][]]{()()}>}<<(<>()){[][]',
    '((<{{[{{[([({[{}()]}[{()<>}(()<>)])]([([<><>]<<><>>)<{[][]}<<>[]>>]((<<>{}>({}<>))([[]()]<{}()>))))]}',
    '[(<<<{<{(({(<<[]{}>><[[]{}][()()]>)[(({}{}}[<>[]])[({}<>){()[]}]]}))[(<<<{[]<>}>{[(){}][()[]]}>>[{[([]<>)([]',
    '({({([<([{([[{[][]}{{}[]}]<[<>[]]({}())>])}(({<{()[]}{[]{}}>{({}())<{}[]>}})({{{{}[]}<{}()>}}))][[[[',
    '([<[<{<[[<{[((<>())(()))[<(){}>{{}[]}]]{<{()[]}{[]()}><<<><>>>}}(<{[()<>]<<>()>}>)><{(([<>()]({}<>))([',
    '[<[(({[<{{[[((())[<>[]])(<[]<>><<>{}>)][{{<>()}<()<>>}[{{}()}([][])]]]{{<<[]()>>[<{}()>[<><>]]){[{<>()',
    '[(<([[<{{[(([<<><>>(()())](([][]]{<>()}))[<<[]<>><()()>>[({}<>){()<>}]]){{<(()[]){()[]}>}<(<',
    '(<[{[<{[[{{([[{}()]<{}()>]<[()[]](()())>)[<[{}{}][[]()]><[{}<>]{{}<>}>]}}{{[{[{}<>][[][]]}<({}()){[]{}}>]',
    '({{<[{<<<<[<<[(){}](<><>)>({{}()}{<><>})>}[({({}<>){<>{}}}<[()<>][(){}]>)[{(()<>)({}[])}]]>',
    '<{<({<([[((<[{[][]}{<>()]]>{<([][])[[]<>]>[(<>{})[{}()]]})[{[({}())[[][]]]{{[]()}}}<[((){})[[]',
    '<<<({{[<(<<{(<[][]>(<>()))({()[]})}[[<<>[]>({}[])]{[[][]]}]>{(<(())<{}<>>>(([])[<>{}])){(<<><>>[[][]])}}>(<[[',
    '[<<({[[(<[[[{<[]{}>{()[]}}<[<>()]>](<{[][]}<<>()>><[[][]]([]())>)]](({{{{}()}{<>[]}}}<({[][]}[',
    '<{[({{{<[(({<({}{})[[]<>]>(({})(<>{}))}[{<{}()>[[][]]}]))]>{<{{{([{}{}]({}{}))(<[]{}>({}[]))}{<{{}()}({}<>)',
    '({{<((({({<[{[<>{}]([][])}]<[{[]<>}]{[[]()][[][]]}]>[{({{}{}}<[][]>){{(){}}}}]})<[(<<({}())<{}()>>({<>}{()()}',
    '<{{{[(({([{<{<[]<>><<>[]>}>[[<[]{}>{()()}]<<(){}>>]}{[{((){})(<>())}<([][])}]}])[({<<{{}[]}>><{{<>()}',
    '(<<<<<<[{{{[[{{}<>}(<>)](<[][]>({}()))]}<<[(<>[])(<>[])]({<>[]}<<>{}>)>{{{[]<>}({}<>>}([<><>]{<>[]})}>}',
    '{[({<{{[({[[{[{}[]]{{}}}]({<{}>{()}}(({}{})({}[])))]{({{[]<>}{()[]}}<[{}<>][[]()]>)[{((){})(<><>)',
    '{{<{{{[({(<{{{{}[]}{[]()}}((<>[])([]<>))}[{{<>{}}([]{})}{[[]<>]<[]<>>}]><{{(<>)}({[]}[()<>])}{<[[]',
    '((<{{{{(([(<{{{}()}{<><>}}>)]{([{<<>[]>{<><>}}<[[][]]<()[]>>])({({[][]}<[][]>)[[[]{}]{[]<>}]})}))({{[',
    '<<{<([{[{[<<<[()()]>[(<><>)[()<>]]>({[{}]<{}>}<{{}()}<[]{}>>)>][<[{<{}}}{[()<>]{<>()}}]([([][]){',
    '(({<([[[({{(({[]<>}[()[]])[({}{})<()<>>))<(([][])<<>[]>){<[]<>>}>}(([<<><>>[{}<>]]{<[]()>{<><>}})([<<><>>(',
]

const validate = (line) => {
    let stack = []
    for (let i = 0; i < line.length; i++) {
        const el = line[i]
        const prev = stack[stack.length - 1]

        if (el === '(' || el === '[' || el === '{' || el === '<') {
            stack.push(el)
        } else if (prev) {
            if ((el === ')' && prev === '(') ||
                (el === ']' && prev === '[') ||
                (el === '}' && prev === '{') ||
                (el === '>' && prev === '<')) {
                stack.pop()
            } else {
                return el
            }
        } else {
            return el
        }
    }
    return stack
}

const complete = (incomplete = []) => {
    let ret = []
    for (let i = incomplete.length - 1; i >= 0; i--) {
        const curr = incomplete[i]
        if (curr === '(') ret.push(')')
        if (curr === '[') ret.push(']')
        if (curr === '{') ret.push('}')
        if (curr === '<') ret.push('>')
    }
    return ret
}

const calculatePointsForInvalid = (input = []) => {
    return input.reduce((points, line) => {
        const error = validate(line)
        if (error === ')') points += 3
        if (error === ']') points += 57
        if (error === '}') points += 1197
        if (error === '>') points += 25137
        return points
    }, 0)
}

const calculatePointsForIncomplete = (input = []) => {
    const points = input.reduce((points, line) => {
        const error = complete(validate(line))
        const linePoints = error.reduce((linePoints, curr) => {
            if (curr === ')') linePoints = linePoints * 5 + 1
            if (curr === ']') linePoints = linePoints * 5 + 2
            if (curr === '}') linePoints = linePoints * 5 + 3
            if (curr === '>') linePoints = linePoints * 5 + 4
            return linePoints
        }, 0)

        if (linePoints !== 0) points.push(linePoints)
        return points
    }, [])

    const sorted = points.sort((a, b) => a - b)
    return sorted[(sorted.length - 1) / 2]
}

console.log(calculatePointsForInvalid(input))
console.log(calculatePointsForIncomplete(input))
