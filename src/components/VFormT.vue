<template>
  <section class="VFormT">
    <v-form-designer
      ref="vfDesigner"
      :field-list-api="fieldListApi"
      :field-list-api123="fieldListApi123"
      :banned-widgets="testBanned"
      :designer-config="designerConfig"
      @setListName="getListName"
    >
    </v-form-designer>
  </section>
</template>

<script>
export default {
  name: "VFormT",
  data() {
    return {
      messageTitle: "表单设计", //主题
      visible: false,
      confirmLoading: false,
      id: null,
      fieldListApi: {
        data: [
          {
            fieldLabel: "id1",
            fieldName: "id1",
            id: "1515877140120473601",
          },
        ],
        labelKey: "fieldLabel",
        nameKey: "fieldName",
      },
      fieldListApi123: {
        data: [],
        labelKey: "fieldLabel",
        nameKey: "fieldName",
      },
      testBanned: [],
      designerConfig: {
        languageMenu: true,
        //externalLink: false,
        //formTemplates: false,
        //eventCollapse: false,
        // previewFormButton: false,
        exportJsonButton: false,
        //clearDesignerButton: false,
        //previewFormButton: false,
        importJsonButton: false,
        //exportCodeButton: false,
        generateSFCButton: false,
        // toolbarMaxWidth: auto,
        //presetCssCode: '.abc { font-size: 16px; }',
      },
      spinning: true, //是否显示动画
      tabName: "",
    };
  },
  components: {},
  watch: {},
  beforeCreate() {},
  created() {
    this.fieldListApi123.data = [
      {
        fieldLabel: "id11",
        fieldName: "id11",
        id: "151587714012047360111",
      },
      {
        fieldLabel: "id22",
        fieldName: "id22",
        id: "151587714012047360122",
      },
      {
        fieldLabel: "id33",
        fieldName: "id33",
        id: "151587714012047360133",
      },
    ];
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeVFormDesigner();
    });
  },
  methods: {
    //初始化表单控制器
    initializeVFormDesigner() {
      this.$refs.vfDesigner.setFormJson(
        JSON.stringify({
          widgetList: [],
          formConfig: {
            modelName: "formData",
            refName: "vForm",
            rulesName: "rules",
            labelWidth: 80,
            labelPosition: "left",
            size: "",
            labelAlign: "label-left-align",
            cssCode: "",
            customClass: "",
            functions: "",
            layoutType: "PC",
            onFormCreated: "",
            onFormMounted: "",
            onFormDataChange: "",
          },
        })
      );
    },
    getListName(val) {
      console.log(val, "KKKKKKKKKKKKKKKKKKK");
    },
  },
};
</script>

<style lang="less">
.full-modal {
  .ant-modal {
    max-width: 100%;
    width: 100% !important;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .left-toolbar {
    > button:last-child {
      display: none;
    }
  }
  // .el-button-group{
  //   display: none;
  // }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    max-height: 100vh !important;
    flex: 1;
  }
}
.toolbar-container {
  display: flex;
  justify-content: space-between;
}
.right-toolbar {
  display: flex;
  justify-content: flex-end;
}
.right-toolbar-con {
  max-width: 300px !important;
  text-align: right !important;
}
</style>