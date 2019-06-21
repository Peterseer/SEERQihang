      function NPC_dialog(npc: int, msg: String, choice1: String, choice2: String, c1: *=null, c2: *=null): void {
			addChild(dialog_panel);
			dialog_panel.x = 0
			dialog_panel.y = 0
			dialog_panel.dialog.npc_show.gotoAndStop(npc);
			dialog_panel.dialog.dialog_msg.text = msg;
			dialog_panel.dialog.answer1.text = choice1;
			dialog_panel.dialog.answer2.text = choice2;
			dialog_panel.gotoAndPlay(1);
			if (choice1 == "" && choice2 == "") {
				dialog_panel.addEventListener(MouseEvent.CLICK, removeDialog);
				//没有选项直接消失
			} else {
				dialog_panel.dialog.answer1.addEventListener(MouseEvent.CLICK, choice1_pick);
				dialog_panel.dialog.answer2.addEventListener(MouseEvent.CLICK, choice2_pick);
				 cho1 = c1;
				 cho2 = c2;
			}

		}
		
		function choice1_pick(event: MouseEvent): void {
					dialog_panel.dialog.answer1.removeEventListener(MouseEvent.CLICK, choice1_pick);
					if(cho1 != null)
					{
						cho1();
					}
					removeChild(dialog_panel);
				}
				function choice2_pick(event: MouseEvent): void {
					dialog_panel.dialog.answer2.removeEventListener(MouseEvent.CLICK, choice2_pick);
					trace(cho2)
					if(cho2 != null)
					{
						cho2();
					}
					removeChild(dialog_panel);
				}

		function removeDialog(): void {
			removeChild(dialog_panel);
		}
