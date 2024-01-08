import * as Menubar from "@radix-ui/react-menubar";

export default function Menubars() {
return (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger className="menubar">Overview</Menubar.Trigger>
      <Menubar.Trigger className="menubar">Analytics</Menubar.Trigger>
      <Menubar.Trigger className="menubar">Reports</Menubar.Trigger>
      <Menubar.Trigger className="menubar">Notifications</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Label />
          <Menubar.Item />

          <Menubar.Group>
            <Menubar.Item />
          </Menubar.Group>

          <Menubar.CheckboxItem>
            <Menubar.ItemIndicator />
          </Menubar.CheckboxItem>

          <Menubar.RadioGroup>
            <Menubar.RadioItem>
              <Menubar.ItemIndicator />
            </Menubar.RadioItem>
          </Menubar.RadioGroup>

          <Menubar.Sub>
            <Menubar.SubTrigger />
            <Menubar.Portal>
              <Menubar.SubContent />
            </Menubar.Portal>
          </Menubar.Sub>

          <Menubar.Separator />
          <Menubar.Arrow />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);
}