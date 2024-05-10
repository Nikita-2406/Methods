import Daemon from "../class/Daemon";

test("testing Daemon", () => {
    const result = new Daemon('demon')
    result.damage(20)
    result.levelUp()
    const ans = {
        name: 'demon',
        type: "Daemon",
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    }
    expect(result).toEqual(ans)
})